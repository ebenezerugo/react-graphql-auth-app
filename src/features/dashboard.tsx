import CreateItemComponent from "../components/create-item.component";
import ItemsComponent from "../components/items.component";
import NavbarComponent from "../components/navbar.component";
import ResendVerificationLinkComponent from "../components/resend-verification-link.component";

const Dashboard = () => {

    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-12">
                        <ResendVerificationLinkComponent/>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <NavbarComponent/>

                <div className="row mt-5">
                    <div className="col-12">
                        <ItemsComponent/>
                    </div>
                </div>
            </div>

            <CreateItemComponent/>
        </div>
    )
}

export default Dashboard;