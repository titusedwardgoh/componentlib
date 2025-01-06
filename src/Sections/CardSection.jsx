import { IoCloudUploadOutline } from "react-icons/io5";
import Card from "../components/Card"

export default function CardSection(){

    return (
        <>
        <Card icon={<IoCloudUploadOutline />}>
            <h3 className="card-title">Card Title</h3>
            <div className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </div>
            </Card>

            <Card>
            <h3 className="card-title">Card Title</h3>
            <div className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </div>
            </Card>
        </>
    )

}