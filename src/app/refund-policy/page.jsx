import styles from "@/styles/contentpage.module.scss"
import { Col, Container, Row } from 'react-bootstrap'

const page = () => {
    return (
        <section className={styles.contentPages}>
            <Container>
                <Row>
                    <Col>
                        <h1>Refund Policy</h1>
                        <p>We prioritize customer satisfaction and aim to deliver exceptional services across all our offerings. However, there may be situations where a refund is requested. This policy outlines the terms and conditions for refunds across our services.</p>
                        <h2>General Terms for Refunds</h2>
                        <h4>Eligibility for Refunds:</h4>
                        <p>Refund requests must be submitted in writing within 15 days of project initiation or next payment (whichever comes later).</p>
                        <p>Refunds are considered only for services where tangible deliverables have not been provided, and no significant progress has been made.</p>
                        <h4>Exclusions:</h4>
                        <p>No refunds will be issued for services already rendered, work completed, or milestones achieved as per the project timeline.</p>
                        <p>Third-party costs (e.g., hosting, domain, ad spend, licensed images, etc.) are non-refundable.</p>
                        <h4>Evaluation Period</h4>
                        <p>Refund requests will undergo an evaluation process to determine eligibility. This may involve reviewing deliverables, project progress, and communication logs.</p>
                        <h2>Service-Specific Refund Policies</h2>
                        <h4>1. SEO Services</h4>
                        <p><strong>Refund Window:</strong>Refunds are only available within the first 30 days of the contract if no measurable progress has been made (e.g., strategy development or keyword research).</p>
                        <p><strong>Non-Refundable:</strong> SEO is a long-term strategy; results cannot be guaranteed within a short period. Services such as competitor analysis, keyword research, and technical audits are non-refundable once delivered.</p>
                        <h4>2. SMM Services</h4>
                        <p><strong>Refund Window:</strong> Refunds are applicable if no content, strategy, or campaigns have been delivered within 14 days of payment.</p>
                        <p><strong>Non-Refundable:</strong>Ad spend paid directly to platforms (e.g., Facebook, Instagram) is non-refundable.</p>
                        <h4>3. Paid Marketing</h4>
                        <p><strong>Refund Window:</strong>Refunds are applicable only for unused management fees if the campaign has not been launched.</p>
                        <p><strong>Non-Refundable:</strong>Costs incurred for ad spend and third-party tools are non-refundable.</p>
                        <h4>4. Web Design & Development</h4>
                        <p><strong>Refund Window:</strong>Refunds can be requested within 14 days of payment if no designs or development work has commenced.</p>
                        <p><strong>Non-Refundable:</strong>Any designs, wireframes, or code delivered to the client will be charged proportionately and deducted from the refund amount.</p>
                        <h4>5. Mobile App Development</h4>
                        <p><strong>Refund Window:</strong>Refunds are allowed within the first 20 days of payment, provided no designs or coding work has been initiated.</p>
                        <p><strong>Non-Refundable:</strong>Refunds are not available once development has begun, as app development involves significant resource allocation.</p>
                        <h4>6. Content Marketing</h4>
                        <p><strong>Refund Window:</strong>Refunds are only available if no drafts or deliverables have been provided within the first 20 days of the contract.</p>
                        <p><strong>Non-Refundable:</strong>Completed content pieces, campaigns, or published work are non-refundable.</p>
                        <h4>7. Book Writing, Editing, and Publishing</h4>
                        <p><strong>Refund Window:</strong>Refunds are applicable only for the initial consultation fee if the project has not commenced.</p>
                        <p><strong>Non-Refundable:</strong>Partial or full manuscripts, edited versions, or any publishing work already completed is non-refundable.</p>
                        <h2>Refund Process</h2>
                        <p><strong>Submission:</strong> All refund requests must be submitted to support@infinitidigital.us with the subject line Refund Request - [Project Name]</p>
                        <p><strong>Review:</strong>Our team will review your request within 7-10 business days and provide feedback.</p>
                        <p><strong>Approval or Rejection:</strong>Approved refunds will be processed within 14 business days. If denied, an explanation will be provided.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default page