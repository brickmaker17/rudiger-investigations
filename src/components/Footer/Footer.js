import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 38% 20% 12%;
    justify-content: space-around;
    height: 180px;
    position: fixed;
    font-size: 12px;
    bottom: 0;
    width: 100%;
    background-color: #000000;
`
const Heading1 = styled.h6`
    color: #A7A37E;
`
const Heading =styled.h6`
    color: #A7A37E;
`
const Heading2 = styled.h6`
    color: #A7A37E;
`
const Link = styled.a`
    color: #EFEBCA;
`

const Footer = () => {
    return (
        <Wrapper>
            <section>
                <Heading1>LAWYERS AND LEGAL LINKS</Heading1>
                <p>Although state law prevents us from soliciting business for attorneys, below you will find some useful legal links.</p>
                <Link href="https://www.utahbar.org">Utah State Bar</Link>
                <br/>
                <Link href="https://le.utah.gov">Utah State Legislature</Link>
                <br/>
                <Link href="http://www.uacdl.org">UACDL</Link>
                <br/>
                <Link href="https://www.utcourts.gov">Utah Courts</Link>
            </section>
            <section>
                <Heading>INTERESTING PI-RELATED SITES</Heading>
                <Link href="https://pimagazine.com">PI Magazine</Link>
            </section>
            <section>
                <Heading2>PRIMARY CONTACTS</Heading2>
                <p>RÜDIGER Investigations, NMS PO BOX 999 Springdale, UT 84767</p>
                <p>Phone/Fax: 435-772-2211 Email: Rudiger@hughes.net</p>

            </section>
        </Wrapper>
    );
}

export default Footer;