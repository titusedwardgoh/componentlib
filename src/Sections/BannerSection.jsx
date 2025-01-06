import React from "react"
import Banner from "../components/Banner"

export default function BannerSection() {
    return(
        <>
            <Banner title = "test" status = "success">This is a test banner, for testing purposes only</Banner>
            <Banner title = "test" status = "success"></Banner>
            <Banner status = "success">This is a success banner, for testing purposes only</Banner>
            <Banner status = "success"></Banner>
            <Banner status = "warning">This is a warning banner, for testing purposes only</Banner>
            <Banner status = "warning"></Banner>
            <Banner status = "update">This is an update banner, for testing purposes only</Banner>
            <Banner status = "update"></Banner>
            <Banner status = "error">This is an error banner, for testing purposes only</Banner>
            <Banner status = "error"></Banner>
        </>
    )
}