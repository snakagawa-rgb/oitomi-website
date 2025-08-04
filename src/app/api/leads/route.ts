import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'edge';

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

async function verifyRecaptcha(token: string): Promise<RecaptchaResponse> {
  const secret = process.env.RECAPTCHA_SECRET;
  
  if (!secret) {
    console.error('Missing RECAPTCHA_SECRET environment variable');
    return { success: false };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    });

    return await response.json();
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.product_id || !body.email) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!body.recaptchaToken) {
      return NextResponse.json(
        { ok: false, error: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }

    const recaptchaResult = await verifyRecaptcha(body.recaptchaToken);
    
    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', recaptchaResult['error-codes']);
      return NextResponse.json(
        { ok: false, error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Check reCAPTCHA score (0.0 - 1.0, where 1.0 is very likely a good interaction)
    if (recaptchaResult.score && recaptchaResult.score < 0.5) {
      console.warn('Low reCAPTCHA score:', recaptchaResult.score);
      return NextResponse.json(
        { ok: false, error: 'Suspicious activity detected' },
        { status: 400 }
      );
    }

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert({
        product_id: body.product_id,
        email: body.email,
        company: body.company || null,
        country: body.country || null,
        qty: body.qty || null,
        message: body.message || null,
        status: 'new'
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting lead:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to save lead' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}