import { PerilsList, TopBanner } from '../../components'
import { Suspense } from "react"

function PerilsPage() {
    return (
        <>
            <TopBanner title="Rental" description="Comprehensive coverage for you and your belongings whether" />
            <Suspense fallback="Loading...">
                <PerilsList />
            </Suspense>
        </>
    )
}

export default PerilsPage