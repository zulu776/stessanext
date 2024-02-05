import nodemailer from 'nodemailer';

const SendMailDownloadDoc = async (req, res) => {
  if (req.method === 'POST') {
    const {
      email = 'contacto@baselegal.co',
      emailClient = 'comercial@prevalentware.com',
      name = 'Carolina Tobon',
      empresa = 'Draco',
      telefono = '00000000',
      mensaje = 'Inserte mensaje aquí',
    } = req.body;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const message = {
      from: `Base Legal <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Contacto nuevo - BASE LEGAL`,
      html: `
      
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Nuevo mensaje</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        h3 a {
          text-align: center;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 16px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class='gmail-fix'] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 10px 20px 10px 20px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
    </style>
  </head>
  <body
    style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0"
  >
    <div class="es-wrapper-color" style="background-color:#EFEFEF">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#efefef"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFEFEF"
      >
        <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-header"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-header-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#334756;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:20px;Margin:0">
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="center"
                                    style="padding:20px;Margin:0;font-size:0px"
                                  >
                                    <a
                                      href="https://baselegal.co/"
                                      target="_blank"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#677D9E;font-size:14px"
                                      ><img
                                        src="https://zjjvzo.stripocdn.email/content/guids/CABINET_3eea9cd534e82ad87118fa26d6d41d5a/images/logologinbaselegal.png"
                                        alt="Financial logo"
                                        title="Financial logo"
                                        width="274"
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-content-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:30px"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0">
                                    <h2
                                      style="Margin:0;line-height:26px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:22px;font-style:normal;font-weight:normal;color:#f2a111"
                                    >
                                      <strong>Nuevo mensaje de contacto</strong>
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        class="esdev-adapt-off"
                        align="left"
                        style="padding:0;Margin:0"
                      >
                        <table
                          class="esdev-mso-table"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding:0;Margin:0"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-p20b"
                                    align="left"
                                    style="padding:0;Margin:0;width:300px"
                                  >
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                    >
                                      <tr style="border-collapse:collapse">
                                        <td
                                          align="right"
                                          style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"
                                        >
                                          <table
                                            width="15%"
                                            height="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            role="presentation"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                          >
                                            <tr
                                              style="border-collapse:collapse"
                                            >
                                              <td
                                                style="padding:0;Margin:0;border-bottom:3px solid #8598b2;background:none 0% 0% repeat scroll #FFFFFF;height:1px;width:100%;margin:0px"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding:0;Margin:0"
                            >
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="left"
                                    style="padding:0;Margin:0;width:300px"
                                  >
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                    >
                                      <tr style="border-collapse:collapse">
                                        <td
                                          align="left"
                                          style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"
                                        >
                                          <table
                                            width="15%"
                                            height="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            role="presentation"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                          >
                                            <tr
                                              style="border-collapse:collapse"
                                            >
                                              <td
                                                style="padding:0;Margin:0;border-bottom:3px solid #2e3951;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse"></tr>
                        </table>
                      </td>
                    </tr>

                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="padding:0;Margin:0;padding-right:20px;padding-top:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                        <table
                          class="es-left"
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:59px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0px"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td><td style="width:20px"></td><td style="width:461px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="left"
                              style="padding:0;Margin:0;width:461px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="left"
                                    style="padding:0;Margin:0;padding-left:10px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      <strong>Nombre completo:</strong>
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      ${name}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>

                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="padding:0;Margin:0;padding-right:20px;padding-top:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                        <table
                          class="es-left"
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:59px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0px"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td><td style="width:20px"></td><td style="width:461px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="left"
                              style="padding:0;Margin:0;width:461px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="left"
                                    style="padding:0;Margin:0;padding-left:10px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      <strong>Empresa:</strong>
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      ${empresa}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>

                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="padding:0;Margin:0;padding-right:20px;padding-top:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                        <table
                          class="es-left"
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:59px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0px"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td><td style="width:20px"></td><td style="width:461px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="left"
                              style="padding:0;Margin:0;width:461px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="left"
                                    style="padding:0;Margin:0;padding-left:10px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      <strong>Telefono</strong>
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      ${telefono}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>

                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="padding:0;Margin:0;padding-right:20px;padding-top:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                        <table
                          class="es-left"
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:59px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0px"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td><td style="width:20px"></td><td style="width:461px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="left"
                              style="padding:0;Margin:0;width:461px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="left"
                                    style="padding:0;Margin:0;padding-left:10px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      <strong>Correo Electronico: </strong>
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      ${emailClient}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>

                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="padding:0;Margin:0;padding-right:20px;padding-top:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                        <table
                          class="es-left"
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:59px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="padding:0;Margin:0;font-size:0px"
                                  ></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td><td style="width:20px"></td><td style="width:461px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="left"
                              style="padding:0;Margin:0;width:461px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-txt-c"
                                    align="left"
                                    style="padding:0;Margin:0;padding-left:10px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      <strong>Mensaje:</strong>
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#333333;font-size:18px"
                                    >
                                      ${mensaje}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse"></tr>
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        bgcolor="#E5E7EB"
                        style="Margin:0;padding-top:20px;padding-right:20px;padding-bottom:40px;padding-left:40px;background-color:#e5e7eb"
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:59px" valign="top"><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-content-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"
                  >
                    <tr style="border-collapse:collapse"></tr>
                    <tr style="border-collapse:collapse">
                      <td
                        class="esdev-adapt-off"
                        align="left"
                        style="padding:0;Margin:0"
                      >
                        <table
                          class="esdev-mso-table"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding:0;Margin:0"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    class="es-m-p20b"
                                    align="left"
                                    style="padding:0;Margin:0;width:300px"
                                  >
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                    >
                                      <tr style="border-collapse:collapse">
                                        <td
                                          align="right"
                                          style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"
                                        >
                                          <table
                                            width="20%"
                                            height="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            role="presentation"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                          >
                                            <tr
                                              style="border-collapse:collapse"
                                            >
                                              <td
                                                style="padding:0;Margin:0;border-bottom:3px solid #8598b2;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              width="undefined"
                              style="padding:0;Margin:0"
                            ></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding:0;Margin:0"
                            >
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="left"
                                    style="padding:0;Margin:0;width:300px"
                                  >
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                    >
                                      <tr style="border-collapse:collapse">
                                        <td
                                          align="left"
                                          style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"
                                        >
                                          <table
                                            width="20%"
                                            height="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            border="0"
                                            role="presentation"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                                          >
                                            <tr
                                              style="border-collapse:collapse"
                                            >
                                              <td
                                                style="padding:0;Margin:0;border-bottom:3px solid #333333;background:none 0% 0% repeat scroll #FFFFFF;height:1px;width:100%;margin:0px"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    bgcolor="#ffffff"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="center"
                              valign="top"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="center"
                                    style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px;font-size:0px"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://zjjvzo.stripocdn.email/content/guids/CABINET_3eea9cd534e82ad87118fa26d6d41d5a/images/logoheaderbaselegal.png"
                                      alt
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      width="80"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    bgcolor="#ffffff"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:20px;Margin:0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              align="center"
                              valign="top"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="center"
                                    style="padding:0;Margin:0;padding-bottom:40px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:33px;color:#334756;font-size:22px"
                                    >
                                      <strong>Equipo BASE LEGAL</strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"
            >
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#334756;width:600px"
                  >
                    <tr style="border-collapse:collapse">
                      <td
                        align="left"
                        style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                        >
                          <tr style="border-collapse:collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding:0;Margin:0;width:560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"
                              >
                                <tr style="border-collapse:collapse">
                                  <td
                                    align="left"
                                    style="Margin:0;padding-bottom:10px;padding-top:15px;padding-left:15px;padding-right:15px"
                                  >
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"
                                    >
                                      <span
                                        style="font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif"
                                        >Por favor no respondas este correo,
                                        solo es informativo.</span
                                      ><br /><br /><span
                                        style="font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif"
                                        >Este envío es confidencial y está
                                        destinado únicamente a la persona a la
                                        que ha sido enviado. Puede contener
                                        información privada y confidencial. Si
                                        usted no es el destinatario al que ha
                                        sido remitida, no puede copiarla,
                                        distribuirla ni emprender con ella
                                        ningún tipo de acción. Si cree que lo ha
                                        recibido por error, por favor,
                                        notifíquelo al remitente. This
                                        transmission is confidential and
                                        intended solely for the person to whom
                                        it is addressed. It may contain
                                        privileged and confidential information.
                                        If you are not the intended recipient,
                                        you should not copy, distribute or take
                                        any action in reliance on it. If you
                                        believe that you have received this
                                        transmission in error, please notify the
                                        sender.</span
                                      >
                                    </p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFFFFF;font-size:14px"
                                    >
                                      <br /><strong
                                        ><a
                                          href="https://baselegal.co"
                                          target="_blank"
                                          style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:14px"
                                          >www.baselegal.co</a
                                        ></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                <td esdev-links-color="#333333" align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-left:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#ffffff;font-size:14px"><a href="https://baselegal.vercel.app/admin/perfil/plan" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif" class="unsubscribe">Quiero cancelar suscripción</a>&nbsp;|&nbsp;<a href="https://baselegal.vercel.app/admin/perfil/cuenta" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Actualizar perfil</a>&nbsp;|&nbsp;<a href="https://baselegal.vercel.app/terminos-y-condiciones" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif">Términos y condiciones</a><br><br></p>
                                <div class="made" style="color:#FFFFFF;display:flex;gap:20px;font-size:14px">
                                 <img class="colombian_logo" src="https://images.emojiterra.com/twitter/v14.0/512px/1f1e8-1f1f4.png" width="20" height="20" alt style="display:block;margin-right:8px;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">Hecho en Colombia<br><br>
                                </div>
                                <div class="rights" style="color:#FFFFFF;font-size:14px">
                                 Todos los derechos © 2022 3M LEGAL S.A.S.
                                </div><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:20px;color:#ffffff;font-size:13px"><br></p></td>
                                </tr>
                                <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;padding-left:15px;font-size:0">
                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr style="border-collapse:collapse">
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/baselegal.co" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:13px"><img title="Facebook" src="https://zjjvzo.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/baselegal.co/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:13px"><img title="Instagram" src="https://zjjvzo.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.linkedin.com/company/base-legal-co/?viewAsMember=true" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:13px"><img title="Linkedin" src="https://zjjvzo.stripocdn.email/content/assets/img/social-icons/circle-white/linkedin-circle-white.png" alt="In" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://api.whatsapp.com/message/4HFKYI6DHRTGP1?autoload=1&app_absent=0" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:13px"><img title="Whatsapp" src="https://zjjvzo.stripocdn.email/content/assets/img/messenger-icons/circle-white/whatsapp-circle-white.png" alt="Whatsapp" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://www.tiktok.com/@baselegal?_t=8VtsPsOkiFZ&_r=1" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:13px"><img title="TikTok" src="https://zjjvzo.stripocdn.email/content/assets/img/social-icons/circle-white/tiktok-circle-white.png" alt="Tt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

      `,
    };
    try {
      await new Promise((resolve, reject) => {
        transporter.sendMail(message, (err, info) => {
          if (err) {
            reject(err);
          }
          resolve(info);
        });
      });
      return res.status(200).json({ status: 'message sent' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return res.status(500).json({ status: 'error sending message' });
    }
  }
  return res.status(500).json({ status: 'error sending message' });
};

export default SendMailDownloadDoc;
