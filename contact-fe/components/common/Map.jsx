import React from 'react';

const Map = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12">
                    <iframe
                        title="Map of Meko Trading Co. Ltd."
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7061075017245!2d105.75127477571057!3d10.04109279006644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0897ef6587995%3A0x818065665df3ca14!2sMeko%20Trading%20Co.%20Ltd.!5e0!3m2!1svi!2s!4v1689153821987!5m2!1svi!2s"
                        width="3000"
                        height="700"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
