import { useState, useEffect } from 'react';
import { supabase, type BlogPost } from '../lib/supabase';

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getBlogPostById = (id: string) => {
    return blogPosts.find(post => post.id === id);
  };

  return {
    blogPosts,
    loading,
    error,
    refetch: fetchBlogPosts,
    getBlogPostById
  };
}