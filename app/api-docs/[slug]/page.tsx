import ApiDocsClient from '../../../components/ApiDocsClient'

export function generateStaticParams() {
  return [
    { slug: 'orders-api' },
    { slug: 'users-api' },
    { slug: 'pet-store-api' },
    { slug: 'jolli-openapi' },
    { slug: 'openapi' }
  ]
}

export default async function ApiDocsPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  return <ApiDocsClient slug={params.slug} />
}
