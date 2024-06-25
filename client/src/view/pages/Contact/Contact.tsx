import {Component} from "react";
import axios from "axios";
import * as events from "node:events";

interface  ContactState{
    email: string,
    subject: string,
    message: string
}

interface ContactProps{
    data: any
}

export class Contact extends Component<ContactProps, ContactState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: 'http://localhost:4000'});

        this.state = {
            email: '',
            subject: '',
            message: ''
        }

        // this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handleSubjectChange = this.handleSubjectChange.bind(this);
        // this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    // private handleEmailChange = (event: {target: {value: string}}) => {
    //     this.setState({
    //         email: event.target.value
    //     });
    // }
    //
    // private handleSubjectChange = (event: {target: {value: string}}) => {
    //     this.setState({
    //         subject: event.target.value
    //     });
    // }
    //
    // private handleMessageChange = (event: {target: {value: string}}) => {
    //     this.setState({
    //         message: event.target.value
    //     });
    // }

    private handleMessageInputOnChange = (event: { target: { value: any, name: any}}) => {
        const target = event.target;
        let name = target.name;
        let value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('/contact/submit',{
                "email": this.state.email,
                "subject": this.state.subject,
                "message": this.state.message
            }).then((res: {data: any}) => {
                const response = res.data;
                alert(response);
            }).catch((error: any) => {
                console.error('Axios Error: ', error);
            });
        }catch (error){
            console.error('Error: ', error);
        }
    }

    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5
                                pl-10 mx-auto">
                    <div className="p-2">
                        <h2 className="text-3xl
                                        text-green-400
                                        text-center
                                        underline
                                        decoration-2">Contact Us</h2>
                        <p className="pb-3 text-[8px]">
                            Got a technical issue?
                            Want to contact us?
                            Please let us assist you..</p>
                    </div>
                    <form className="h-auto p-2
                                     justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Email:</label>
                            <input type="email"
                                    className="float-right
                                               border-[1px]
                                               border-green-200" name="email" value={this.state.email} onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Subject:</label>
                            <input type="text"
                                   className="float-right
                                               border-[1px]
                                               border-green-200" name="subject" value={this.state.subject} onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Message:</label>
                            <textarea
                                   className="float-right
                                               border-[1px]
                                               border-green-200" name="message" value={this.state.message} onChange={this.handleMessageInputOnChange}/>
                        </div>

                        <div className="mt-2">
                            <button className="mt-5 p-[5px]
                                               bg-green-400
                                               text-[7px]" onClick={this.onSendBtnClick}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}