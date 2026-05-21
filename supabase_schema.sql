-- Create schedules table
CREATE TABLE public.schedules (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    class_name TEXT NOT NULL,
    day_of_week TEXT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Turn on Row Level Security
ALTER TABLE public.schedules ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read schedules
CREATE POLICY "Schedules are viewable by everyone" ON public.schedules
    FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete (Admin logic can be added here)
CREATE POLICY "Authenticated users can insert schedules" ON public.schedules
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own schedules" ON public.schedules
    FOR UPDATE USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own schedules" ON public.schedules
    FOR DELETE USING (auth.uid() = created_by);

-- Create a storage bucket called "resources"
INSERT INTO storage.buckets (id, name, public) VALUES ('resources', 'resources', true);

-- Allow public to read the files
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'resources' );

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload files"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'resources' AND auth.role() = 'authenticated' );

-- Allow authenticated users to delete files
CREATE POLICY "Authenticated users can delete files"
ON storage.objects FOR DELETE
USING ( bucket_id = 'resources' AND auth.role() = 'authenticated' );
