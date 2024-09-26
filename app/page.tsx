import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        Don't have an account? <Link href="/signin">Sign In</Link>
      </p>
    </div>
  )
}