import React, {useContext} from 'react';
import {
    MDBBtn, MDBCard,
    MDBCardText,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import {Context} from "../../index";

const SetupList = ({show,onHide,showConf}) => {
    const {comp} = useContext(Context)
    return (
        <div>
            <>
                <MDBModal
                    staticBackdrop
                    tabIndex="-1"
                    show={show}
                    onHide={onHide}
                >
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Your setup</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <MDBCard className="square border border-dark mt-3">
                                    <h2>MotherBoard</h2>
                                    <h3>{"Name: " + comp.currMotherboard.name}</h3>
                                    <h3>{"Socket: " + comp.currMotherboard.socket}</h3>
                                    <h3>{"Ports: " + comp.currMotherboard.ports}</h3>
                                    <h3>{"MaxRAM: " + comp.currMotherboard.maxRAM}</h3>
                                    <h3>{"intGraphic: " + comp.currMotherboard.intGraphic}</h3>
                                    <h3>{"Cost: " + comp.currMotherboard.cost}</h3>
                                </MDBCard>
                                <MDBCard className="square border border-dark mt-3">
                                    <h2>Processor</h2>
                                    <h3>{"Name: " + comp.currProcessor.name}</h3>
                                    <h3>{"Socket: " + comp.currProcessor.socket}</h3>
                                    <h3>{"Cores: " + comp.currProcessor.cores}</h3>
                                    <h3>{"Threads: " + comp.currProcessor.threads}</h3>
                                    <h3>{"Frequency: " + comp.currProcessor.frequency}</h3>
                                    <h3>{"intGraphics: " + comp.currProcessor.intGraphics}</h3>
                                    <h3>{"Cost: " + comp.currProcessor.cost}</h3>
                                </MDBCard>
                                <MDBCard className="square border border-dark mt-3">
                                    <h2>VideoCard</h2>
                                    <h3>{"Name: " + comp.currVideoCard.name}</h3>
                                    <h3>{"Memory: " + comp.currVideoCard.memory}</h3>
                                    <h3>{"Interface: " + comp.currVideoCard.interface}</h3>
                                    <h3>{"Ports: " + comp.currVideoCard.ports}</h3>
                                    <h3>{"Power: " + comp.currVideoCard.power}</h3>
                                    <h3>{"Cost: " + comp.currVideoCard.cost}</h3>
                                </MDBCard>
                                <MDBCard className="square border border-dark mt-3">
                                    <h2>RAM</h2>
                                    <h3>{"Name: " + comp.currRAM.name}</h3>
                                    <h3>{"Memory: " + comp.currRAM.memory}</h3>
                                    <h3>{"typeMemory: " + comp.currRAM.typeMemory}</h3>
                                    <h3>{"Frequency: " + comp.currRAM.frequency}</h3>
                                    <h3>{"Power: " + comp.currRAM.power}</h3>
                                    <h3>{"Cost: " + comp.currRAM.cost}</h3>
                                </MDBCard>
                                <MDBCard className="square border border-dark mt-3">
                                    <h2>{"Full Cost: " + comp.fullCost}</h2>
                                </MDBCard>

                            </MDBModalBody>
                            <MDBModalFooter>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        </div>
    );
};

export default SetupList;