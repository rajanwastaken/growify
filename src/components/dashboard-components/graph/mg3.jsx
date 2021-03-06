import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Bar } from 'react-chartjs-2';

let lineData = {
    labels: ["RCE", "MZE", "CKP", "KDP", "LEN", "PGN", "BNA", "MGO", "GPS", "WAM", "MUM", "APL", "CTN", "JTE", "CFF"],
    datasets: [{
        label: 'Jute',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [240, 90, 86, 110, 153, 50, 47, 60, 45, 110, 107, 105, 89, 50, 120, 118, 150, 190, 60, 175, 160]
    }]
};

const MG3 = () => {
    return (
        <Card style={{marginBottom: '100px;'}}>
            <CardBody className="bg-darkGreen">
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><div style={{fontSize: '140%'}}>Rainfall (mm)</div></CardTitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <h4><u><a target="_blank" href="https://share.streamlit.io/getgrowify/ml-app/app.py">ML Model</a></u></h4>
                        </ul>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Bar data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default MG3;
