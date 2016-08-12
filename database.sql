CREATE TABLE public.product
(
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name character varying(255),
  description character varying(255),
  price numeric,
  picture character varying(255),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT product_pkey PRIMARY KEY (id)
)
