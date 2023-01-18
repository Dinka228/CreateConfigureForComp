import {makeAutoObservable} from "mobx";

export default class CompStore {
    constructor() {
        this._processor = [
            {threads:"12",cores:"6",frequency:"3.6",socket:"AM4",name:"AMD Ryzen 5 3600",intGraphics:false ,cost:"3699"},
            {threads:"32",cores:"24",frequency:"3",socket:"1700",name:"Intel Core i9-13900K",intGraphics:true ,cost:"27500"},
            {threads:"12",cores:"6",frequency:"2.5",socket:"1700",name:"Intel Core i5-12400F",intGraphics:false ,cost:"7500"},
            {threads:"24",cores:"12",frequency:"3.7",socket:"AM4",name:"AMD Ryzen 9 5900X",intGraphics:false ,cost:"15000"},
            {threads:"8",cores:"4",frequency:"3.7",socket:"1200",name:"Intel Core i3-10105F",intGraphics:false ,cost:"3100"},
        ]
        this._videoCard = [
            {name:"Gigabyte PCI-Ex GeForce RTX 3060 Windforce",memory:"12",interface:"PCI-Express x16 4.0",ports:"HDMI",cost:"15400",power:"550"},
            {name:"MSI PCI-Ex Radeon RX 6500 XT Mech",memory:"4",interface:"PCI-Express 4.0",ports:"DisplayPort",cost:"7800",power:"400"},
            {name:"Gigabyte PCI-Ex GeForce RTX 3060 Ti",memory:"8",interface:"PCI-Express x16 4.0",ports:"HDMI",cost:"18700",power:"600"},
            {name:"ASUS PCI-Ex GeForce GTX 1630 Phoenix",memory:"4",interface:"PCI-Express x16 3.0",ports:"HDMI",cost:"5900",power:"400"},
            {name:"Gigabyte PCI-Ex GeForce GTX 1660 Super ",memory:"6",interface:"PCI-Express x16 3.0",ports:"DisplayPort",cost:"10800",power:"450"},
        ]
        this._ram = [
            {name:"Kingston Fury",memory:"8",typeMemory:"DDR4",power:"1.35",frequency:"3200",cost:"1050"},
            {name:" Kingston Fury SODIMM",memory:"16",typeMemory:"DDR4",power:"1.2",frequency:"3200",cost:"3100"},
            {name:"AMD Memory R9 Perfomance",memory:"32",typeMemory:"DDR4",power:"1.2",frequency:"3200",cost:"8800"},
            {name:"AMD Performance Series",memory:"16",typeMemory:"DDR4",power:"1.2",frequency:"3200",cost:"1600"},
            {name:"Corsair Vengeance",memory:"16",typeMemory:"DDR4",power:"1.35",frequency:"3200",cost:"2500"}
        ]
        this._motherBoard = [{socket:"AM4",name:"Asus TUF Gaming B450M-Pro II ",intGraphic:true,ports:"true",maxRAM:"128", cost:"3500"},
            {socket:"AM4",name:"Gigabyte B550 Gaming",intGraphic:true,ports:"false",maxRAM:"128", cost:"4700"},
            {socket:"1200",name:"Asus Prime H510M-A",intGraphic:true,ports:"true",maxRAM:"64", cost:"2800"},
            {socket:"1700",name:"Asus PRIME B660M-K D4",intGraphic:true,ports:"false",maxRAM:"64", cost:"4000"},
            {socket:"1700",name:"Asus PRIME Z690-P WI-FI D4",intGraphic:true,ports:"true",maxRAM:"128", cost:"8800"}]





        this._currMotherboard = {cost:0}
        this._currProcessor = {cost:0}
        this._currVideoCard = {cost:0}
        this._currRAM = {cost:0}
        this._fullCost = 0
        makeAutoObservable(this)
    }
    setProcessor(processor){
        this._processor = processor
    }
    setFullCost(fullCost){
        this._fullCost = fullCost
    }
    get fullCost(){
        return this._fullCost
    }
    setCurrProcessor(currProcessor){
        this._currProcessor = currProcessor
    }
    setCurrMotherboard(currMotherboard){
        this._currMotherboard = currMotherboard
    }
    setMotherboard(motherBoard){
        this._motherBoard = motherBoard
    }
    setVideoCard(videoCard){
        this._videoCard = videoCard
    }
    setCurrVideoCard(currVideoCard){
        this._currVideoCard = currVideoCard
    }
    setRAM(ram){
        this._ram = ram
    }
    setCurrRAM(currRAM){
        this._currRAM = currRAM
    }
    get RAM(){
        return this._ram
    }
    get currRAM(){
        return this._currRAM
    }
    get videoCard(){
        return this._videoCard
    }
    get currVideoCard(){
        return this._currVideoCard
    }
    get motherBoard(){
        return this._motherBoard
    }
    get currMotherboard(){
        return this._currMotherboard
    }
    get processor(){
        return this._processor
    }
    get currProcessor(){
        return this._currProcessor
    }
}
