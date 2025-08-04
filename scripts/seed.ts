import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample data
const categories = [
  {
    slug: 'nambu-ironware',
    name: '南部鉄器',
    hero_img: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=1200&h=800&fit=crop',
    description: '400年の歴史を持つ岩手県の伝統工芸品。鉄瓶や鍋など、職人の手によって一つ一つ丁寧に作られています。'
  },
  {
    slug: 'imabari-towel',
    name: '今治タオル',
    hero_img: 'https://images.unsplash.com/photo-1615874694520-474822394e73?w=1200&h=800&fit=crop',
    description: '愛媛県今治市で生産される高品質タオル。吸水性と肌触りの良さで世界的に評価されています。'
  }
];

const products = {
  'nambu-ironware': [
    {
      slug: 'nambu-tetsubin-sakura',
      name: '南部鉄瓶 桜',
      hero_img: 'https://images.unsplash.com/photo-1617330527074-fe659b64bb30?w=800&h=600&fit=crop',
      short_copy: '桜模様が美しい伝統的な南部鉄瓶。お茶の味をまろやかにします。',
      story_html: `
        <h3>職人の技が光る一品</h3>
        <p>この南部鉄瓶は、岩手県の熟練職人によって一つ一つ手作りされています。表面に施された桜の模様は、日本の四季を感じさせる美しいデザインです。</p>
        <h3>健康にも良い鉄分補給</h3>
        <p>南部鉄瓶で沸かしたお湯には、体に吸収されやすい二価鉄が溶け出し、鉄分補給にも効果的です。まろやかな味わいのお茶やコーヒーをお楽しみいただけます。</p>
        <h3>お手入れ方法</h3>
        <ul>
          <li>使用後は完全に乾燥させてください</li>
          <li>洗剤は使用せず、お湯ですすぐだけで十分です</li>
          <li>内部の錆は鉄分の結晶で、品質に問題ありません</li>
        </ul>
      `,
      spec_pdf_url: 'https://example.com/specs/nambu-tetsubin-sakura.pdf'
    },
    {
      slug: 'nambu-sukiyaki-nabe',
      name: '南部鉄器すき焼き鍋',
      hero_img: 'https://images.unsplash.com/photo-1563640705352-b0492592909e?w=800&h=600&fit=crop',
      short_copy: '熱伝導性に優れた南部鉄器のすき焼き鍋。家族の団らんに最適です。',
      story_html: `
        <h3>均一な熱伝導で美味しく調理</h3>
        <p>南部鉄器の特徴である優れた熱伝導性により、食材に均一に火が通ります。すき焼きはもちろん、様々な料理にご使用いただけます。</p>
        <h3>世代を超えて使える耐久性</h3>
        <p>適切にお手入れいただければ、100年以上使い続けることができます。使い込むほどに油がなじみ、より使いやすくなっていきます。</p>
      `,
      spec_pdf_url: 'https://example.com/specs/nambu-sukiyaki-nabe.pdf'
    }
  ],
  'imabari-towel': [
    {
      slug: 'imabari-bath-towel-premium',
      name: '今治バスタオル プレミアム',
      hero_img: 'https://images.unsplash.com/photo-1605134348730-6d7ca5a12d2a?w=800&h=600&fit=crop',
      short_copy: '最高級の肌触りと吸水性。ホテル仕様の贅沢なバスタオル。',
      story_html: `
        <h3>今治タオルの品質基準</h3>
        <p>今治タオルブランドの認定を受けるには、厳しい品質基準をクリアする必要があります。このバスタオルは、5秒以内に水に沈む優れた吸水性を持っています。</p>
        <h3>こだわりの製法</h3>
        <p>軟水を使用した独自の製法により、綿本来の柔らかさを最大限に引き出しています。化学薬品の使用を最小限に抑え、肌に優しい仕上がりです。</p>
        <h3>使用シーン</h3>
        <ul>
          <li>毎日のバスタイムに</li>
          <li>スポーツやジムでの使用に</li>
          <li>贈り物として</li>
        </ul>
      `,
      spec_pdf_url: 'https://example.com/specs/imabari-bath-towel.pdf'
    },
    {
      slug: 'imabari-face-towel-set',
      name: '今治フェイスタオルセット',
      hero_img: 'https://images.unsplash.com/photo-1563640867394-43b60f0dc38d?w=800&h=600&fit=crop',
      short_copy: '毎日使いに最適なフェイスタオル5枚セット。カラーバリエーション豊富。',
      story_html: `
        <h3>日常使いに最適なサイズ</h3>
        <p>34cm×80cmのフェイスタオルは、洗顔後の使用はもちろん、スポーツタオルとしても最適なサイズです。</p>
        <h3>環境に配慮した製造</h3>
        <p>今治の豊かな水資源を守るため、環境に配慮した製造工程を採用しています。オーガニックコットンを使用し、持続可能な生産を心がけています。</p>
        <h3>カラーバリエーション</h3>
        <p>落ち着いた和の色合いから、明るいパステルカラーまで、お部屋の雰囲気に合わせてお選びいただけます。</p>
      `,
      spec_pdf_url: 'https://example.com/specs/imabari-face-towel.pdf'
    }
  ]
};

async function seed() {
  console.log('🌱 Starting seed...');

  try {
    // Upsert categories
    for (const category of categories) {
      const { data, error } = await supabase
        .from('categories')
        .upsert(category, { onConflict: 'slug' })
        .select()
        .single();

      if (error) {
        console.error(`Error upserting category ${category.slug}:`, error);
        continue;
      }

      console.log(`✅ Category upserted: ${category.name}`);

      // Upsert products for this category
      const categoryProducts = products[category.slug as keyof typeof products] || [];
      
      for (const product of categoryProducts) {
        const productData = {
          ...product,
          category_id: data.id
        };

        const { error: productError } = await supabase
          .from('products')
          .upsert(productData, { onConflict: 'slug' })
          .select();

        if (productError) {
          console.error(`Error upserting product ${product.slug}:`, productError);
          continue;
        }

        console.log(`  ✅ Product upserted: ${product.name}`);
      }
    }

    console.log('\n🎉 Seed completed successfully!');
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

// Run the seed function
seed();