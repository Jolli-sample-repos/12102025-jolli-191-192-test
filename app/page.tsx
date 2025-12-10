import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/malformed-code-block')
}
