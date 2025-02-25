import { onAuthenticatedUser } from "@/actions/auth"
import { onGetGroupInfo } from "@/actions/groups"
import { onGetActiveSubscription } from "@/actions/payments"
import GroupSideWidget from "@/components/global/group-side-widget"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import AboutGroup from "../_components/about"

type PageProps = {
  params: { groupid: string }
}

// Ensure this function is **NOT** returning a Promise for `params`
const Page = async ({ params }: PageProps) => {
  if (!params?.groupid) {
    throw new Error("Missing groupid parameter")
  }

  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ["about-group-info"],
    queryFn: () => onGetGroupInfo(params.groupid),
  })

  await query.prefetchQuery({
    queryKey: ["active-subscription"],
    queryFn: () => onGetActiveSubscription(params.groupid),
  })

  const userid = await onAuthenticatedUser()

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="pt-36 pb-10 container grid grid-cols-1 lg:grid-cols-3 gap-x-10">
        <div className="col-span-1 lg:col-span-2">
          <AboutGroup userid={userid.id!} groupid={params.groupid} />
        </div>
        <div className="col-span-1 relative">
          <GroupSideWidget userid={userid.id} groupid={params.groupid} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default Page
