import React from 'react';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import Footer from './Footer';

function ContentWrapper() {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
                <ContentRowTop />
			</div>
			<Footer />

		</div>
    );
}

export default ContentWrapper;