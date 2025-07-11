import { useState, useEffect } from 'react';
import { supabase, type Property } from '../lib/supabase';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getPropertyById = (id: string) => {
    return properties.find(property => property.id === id);
  };

  return {
    properties,
    loading,
    error,
    refetch: fetchProperties,
    getPropertyById
  };
}