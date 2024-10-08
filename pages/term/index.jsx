import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


function Term() {
    return (
        <>
            <div className="">
                <Nav className="" />
                <Sidebar className="" />
                <br />
                <h1 className="text-3xl font-bold mb-4 text-center md:underline">
                    Terms and Conditions for Booking Music Venues
                </h1>
                <div className="prose prose-lg ">
                    <p className="text-center">
                        Introduction:
                        These Terms and Conditions govern the booking of music venues through Rock Entertainment Ltd. By booking any of the listed venues, you agree to comply with these terms.
                    </p>
                    <br />
                    <div className="prose prose-lg text-wrap text-pretty m-8">
                        <p>
                            Venues:
                            Rock Entertainment Ltd. facilitates bookings for the following venues:
                        </p>
                        <br />
                        <p>
                            1. The Wanch, Hong Kong<br />
                            2. Rev-Now, Taipei<br />
                            3. The Rock Pub, Bangkok<br />
                            4. Rock Factory, Pattaya<br />
                            5. Bauhaus Roppongi, Tokyo<br />
                            6. Rockaholic Shibuya Music Bar, Tokyo<br />
                            7. 12 Monkeys Music Hall & Pub, Philippines<br />
                            8. Club FF, Korea<br />
                            9. Hanoi Rock City, Vietnam<br />
                            10. The Flying V Metal Bar, Singapore<br />
                            11. Tom, Dick & Harry's, Malaysia<br />
                            12. Gimme Shelter Bali, Indonesia
                        </p>
                        <br />
                        <p>
                            Booking Process:<br />
                            1. Inquiry: Bands must submit an inquiry for the desired venue, including preferred dates and times.<br />
                            2. Confirmation: Upon availability, Rock Entertainment Ltd. will confirm the booking and provide a quote.<br />
                            3. Contract: A formal contract will be issued, outlining performance details and terms.
                        </p>
                        <br />
                        <p>
                            Payment Terms:<br />
                            Payments for booking venues can be made using the following methods:
                        </p>
                        <br />
                        <p>
                            PayPal: Payments can be processed securely via PayPal.<br />
                            Cheque: Cheques should be made out to Rock Entertainment Ltd. and mailed to our office.<br />
                            Bank Wire Transfer: Bank transfer details will be provided upon confirmation of the booking.
                        </p>
                        <br />
                        <p>
                            Full payment must be received within 14 days of booking confirmation to secure your date. Any late payments may result in cancellation of the booking.
                        </p>
                        <br />
                        <p>
                            Cancellation Policy:<br />
                            Cancellations must be made in writing at least 30 days prior to the scheduled performance date for a full refund. Cancellations made less than 30 days in advance may incur a penalty or forfeiture of deposit, depending on the venue's policies.
                        </p>
                        <br />
                        <p>
                            Performance Guidelines:<br />
                            1. Set Duration: Each performance must adhere to the set duration outlined in the contract.<br />
                            2. Sound Check: Bands are required to complete a sound check at least two hours prior to the performance.<br />
                            3. Conduct: Bands are expected to conduct themselves professionally and adhere to the venue's policies.
                        </p>
                        <br />
                        <p>
                            Liability:<br />
                            Rock Entertainment Ltd. is not liable for any damages, injuries, or losses incurred during the performance. Bands are responsible for their own equipment and personnel.
                        </p>
                        <br />
                        <p>
                            Governing Law:<br />
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the venue is located.
                        </p>
                        <br />
                        <p>
                            Amendments:<br />
                            Rock Entertainment Ltd. reserves the right to amend these Terms and Conditions at any time. All amendments will be communicated to the bands.
                        </p>
                        <br />
                        <p>
                            Contact Information:<br />
                            For any inquiries regarding bookings, please contact us at:
                        </p>
                        <br />
                        <p>
                            Email: aeltd@gmail.com<br />
                            Phone: 852 2730 5653
                        </p>
                    </div>
                </div>

                <Footer />
            </div >



        </>
    );
}
export default Term;