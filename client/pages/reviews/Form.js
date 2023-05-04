
import { useState } from 'react';

function timer(time, domain) {
    var timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(timer);
            document.location = domain;
        } else {
            time--;
        }
    }, time)
}

const parseJSON = resp => (resp.json ? resp.json() : resp);
const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then(resp => {
        throw resp;
    });
};
const headers = {
    'Content-Type': 'application/json',
};

const NewReview = ({ inCode }) => {


    /*const [modifiedData, setModifiedData] = useState({
        code: '',
        name: '',
        organization: '',
        text: '',
        publishedAt: null,
    });

    const handleChange = ({ target: { name, value } }) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
      
    };*/

    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [text, setText] = useState('');
    const [connectionType, setConnectionType] = useState('email');
    const [connect, setConnect] = useState('');

    const handleName = e => { setName(e.target.value); }
    const handleOrganization = e => { setOrganization(e.target.value); }
    const handleText = e => { setText(e.target.value); }
    const handleConnectionType = e => { setConnectionType(e.target.value); }
    const handleConnect = e => { setConnect(e.target.value); }



    /*const handleSubmit = async e => {
        console.log(modifiedData);
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:1337/api/reviews?populate=*`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ data: modifiedData }),
            })
                .then(checkStatus)
                .then(parseJSON);
        } catch (error) {
            alert(`error`);
            timer(1, "/reviews/success");
        }
        timer(5, "/reviews/success");
    };*/

    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-lg-6`}>
                    <form>
                        <h3>Test form</h3>
                        <br />

                        <label>
                            Code:<br></br><br></br>
                            <input type="text" name="code" value={inCode} required disabled />
                        </label><br></br><br></br><br></br>
                        <label>
                            Name:<br></br><br></br>
                            <input type="text" name="name" value={name} onChange={handleName} required />
                        </label><br></br><br></br><br></br>
                        <label>
                            Organization:<br></br><br></br>
                            <input type="text" name="organization" value={organization} onChange={handleOrganization} />
                        </label><br></br><br></br><br></br>
                        <label>
                            type:<br></br><br></br>
                            <select name="connectionType" value={connectionType} onChange={handleConnectionType}>
                                <option value="email">По почте</option>
                                <option value="phone">По телефону</option>
                                <option value="tg">Telegran</option>
                                <option value="wa">Whatsapp</option>
                            </select>
                        </label><br></br><br></br>
                        <label>
                            {(() => {
                                switch (connectionType) {
                                    case "email": return "email";
                                    case "phone": return "phone";
                                    case "tg": return "phone";
                                    case "wa": return "phone";
                                }
                            })()}:<br></br><br></br>
                            <input type="text" name="connect" value={connect} onChange={handleConnect} placeholder= {(() => {
                                switch (connectionType) {
                                    case "email": return "example@email.com";
                                    case "phone": return "+7 (999) 999-99-99";
                                    case "tg": return "+7 (999) 999-99-99";
                                    case "wa": return "+7 (999) 999-99-99";
                                }
                            })()}/>
                        </label><br></br><br></br><br></br>

                        <label>
                            text:<br></br><br></br>
                            <textarea
                                style={{ resize: `none` }}
                                required

                                rows="10" cols="45"
                                type="text"
                                name="text"
                                value={text} onChange={handleText}
                            />
                        </label><br></br><br></br>


                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={`col-lg-6`}>
                    <br></br><br></br>
                    {inCode}<br></br>
                    {name}<br></br>
                    {organization}<br></br>
                    {text}<br></br>
                    {connectionType}<br></br>
                    {connect}

                </div>
            </div>
        </div>
    );
};

export default NewReview;
