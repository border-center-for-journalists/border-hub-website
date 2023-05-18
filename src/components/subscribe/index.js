/* eslint-disable */
import React, { Component } from "react"
import { TitleMediumContainer, Rows, FormBody } from "../../theme/index.styled"
import { YellowBody, CustomRow, XContainer } from "./index.styled"

/*
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!-- Begin Mailchimp Signup Form -->
                
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	 Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. 
       </style>
*/

class SubscribeComponent extends Component {
  render() {
    return (
      <YellowBody>
        <TitleMediumContainer color={true}>
          <h2>Suscríbete y recibe noticias al momento:</h2>
          <FormBody color id="mc_embed_signup">
            <form
              action="https://bordercenter.us20.list-manage.com/subscribe/post?u=7e8c52a85a62c87db4816ca56&amp;id=d871cf9a52"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <Rows align="space-between" wrap="true" id="mc_embed_signup_scroll">
                <CustomRow width="48%" widthXl="24%" className="mc-field-group">
                  <label htmlFor="mce-FNAME">Nombre </label>
                  <input type="text" name="FNAME" className="" id="mce-FNAME" />
                </CustomRow>
                <CustomRow width="48%" widthXl="24%" className="mc-field-group">
                  <label htmlFor="mce-LNAME">Apellido </label>
                  <input type="text" name="LNAME" className="" id="mce-LNAME" />
                </CustomRow>
                <CustomRow width="48%" widthXl="24%" className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Correo <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </CustomRow>
                <div
                  className="mc-field-group size1of2"
                  style={{ display: "none" }}
                >
                  <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
                  <div className="datefield">
                    <span className="subfield monthfield">
                      <input
                        className="birthday "
                        type="text"
                        pattern="[0-9]*"
                        placeholder="MM"
                        size="2"
                        maxLength="2"
                        name="BIRTHDAY[month]"
                        id="mce-BIRTHDAY-month"
                      />
                    </span>{" "}
                    /
                    <span className="subfield dayfield">
                      <input
                        className="birthday "
                        type="text"
                        pattern="[0-9]*"
                        placeholder="DD"
                        size="2"
                        maxLength="2"
                        name="BIRTHDAY[day]"
                        id="mce-BIRTHDAY-day"
                      />
                    </span>
                    <span className="small-meta nowrap">( mm / dd )</span>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_7e8c52a85a62c87db4816ca56_d871cf9a52"
                    tabIndex="-1"
                  />
                </div>
                <CustomRow width="48%" widthXl="24%" className="clear">
                  <input
                    type="submit"
                    value="Enviar"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </CustomRow>
              </Rows>
            </form>
          </FormBody>
          {/*<FormBody color={true}>
            <Rows>
              <CustomRow>
                <p>Nombre</p>
                <input type="text" name="name" />
              </CustomRow>
              <CustomRow>
                <p>Mail</p>
                <input type="email" name="email" />
              </CustomRow>
              <CustomRow>
                <button name="Submit">Enviar</button>
              </CustomRow>
            </Rows>
    </FormBody>*/}
        </TitleMediumContainer>
      </YellowBody>
    )
  }
}
export default SubscribeComponent
