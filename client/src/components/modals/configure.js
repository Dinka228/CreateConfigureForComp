import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBCardText
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {Form} from "react-bootstrap";

const Configure = ({show,onHide,showSetup}) => {
    const {comp} = useContext(Context)
    const [cost,setCost] = useState("")
    const setup = () =>{
        console.log(cost)
        let videoCardCost = cost / 2
        let processorCost = cost / 5
        let motherboardCost = cost / 5
        let ramCost = cost / 10
        comp.videoCard.filter(videoCardFilter=>{
            if(+videoCardFilter.cost <= +videoCardCost && +videoCardFilter.cost >= +comp.currVideoCard.cost){
                console.log('Ya tyt')
                comp.setCurrVideoCard(videoCardFilter)
            }
        })
        comp.processor.filter(processorFilter=>{
                if(+processorFilter.cost <= +processorCost && +processorFilter.cost >= +comp.currProcessor.cost){
                    comp.setCurrProcessor(processorFilter)
                }
            })
        comp.RAM.filter(RAMFilter=>{
            if(+RAMFilter.cost <= +ramCost && +RAMFilter.cost >= +comp.currRAM.cost){
                comp.setCurrRAM(RAMFilter)
            }
        })
        comp.motherBoard.filter(motherBoard=>{
            if(+motherBoard.cost <= +motherboardCost && +motherBoard.cost >= +comp.currMotherboard.cost && motherBoard.socket === comp.currProcessor.socket){
                comp.setCurrMotherboard(motherBoard)
            }
        })
        console.log(comp.currVideoCard.name + " " + comp.currVideoCard.cost)
        console.log(comp.currProcessor.name + " " + comp.currProcessor.cost)
        console.log(comp.currMotherboard.name + " " + comp.currMotherboard.cost)
        console.log(comp.currRAM.name + " " + comp.currRAM.cost)
        let fullCost = +comp.currMotherboard.cost + +comp.currRAM.cost + +comp.currVideoCard.cost + +comp.currProcessor.cost
        comp.setFullCost(fullCost)
        showSetup()
        onHide()
    }
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
                                <MDBModalTitle>Enter the settings</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody>
                                {/*<MDBCardText className="text-muted">*/}
                                {/*    <div className="col-xs-5">*/}
                                {/*        <select style={{borderRadius:20, width:400, fontSize:20}} onChange={(e)=>{*/}
                                {/*            console.log(e.target.value)*/}
                                {/*            comp.motherboard.filter(motherboardFilter=>{*/}
                                {/*                if(motherboardFilter.name === e.target.value){*/}
                                {/*                    comp.setCurrMotherboard(motherboardFilter)*/}
                                {/*                }*/}
                                {/*            })*/}
                                {/*        }}>*/}
                                {/*            <option value="" disabled selected>{!comp.currMotherboard.name  ? `Choose your motherboard` : comp.currMotherboard.name}</option>*/}
                                {/*            {comp.motherboard.map(motherboard=><option key={motherboard.id}>{motherboard.name}</option>)}*/}
                                {/*        </select>*/}
                                {/*    </div>*/}
                                {/*</MDBCardText>*/}
                                <Form>
                                    <Form.Control
                                        value={cost}
                                        onChange={e=>setCost(e.target.value)}
                                        className='mt-3'
                                        placeholder={"Enter Cost"}
                                    />
                                </Form>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn onClick={()=>
                                    setup()
                                }>Setup</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        </div>
    );
};

export default Configure;