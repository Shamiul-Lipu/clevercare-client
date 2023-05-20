import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `CleverCare | ${title}`
    }, [title])
}

export default useTitle;