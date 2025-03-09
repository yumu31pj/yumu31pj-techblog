import type { MicroCMSAuthType } from '../../../src/types/ApiTypes';
import { getMicroCMSClient } from '../../../src/utils/microcms/getMicroCMSClient';

// SSGでカテゴリーページを生成するために利用。
// カテゴリー一覧を取得し、カテゴリーごとに投稿を取得
export const getAllBlogCategories = async (auth: MicroCMSAuthType) => {
  const client = getMicroCMSClient(auth.serviceDomain, auth.apiKey);

  try {
    const categories = await client.getList({ endpoint: 'blog_categories'}); // カテゴリ一覧を取得
    const categoryCounts = await Promise.all(categories.contents.map(async (category) => {
      const blogs = await client.getList({
        endpoint: 'blog',
        queries: { filters: `category[contains]${category.id}`, limit: 0 },
      });
      return { id: category.id, count: blogs.totalCount };
    }));
    return categoryCounts;
  } catch (err) {
    console.error('カテゴリ一覧の取得に失敗しました。', err);
    return [];
  }
};