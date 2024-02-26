import * as SibApiV3Sdk from "@getbrevo/brevo";

const brevoKey = process.env.BREVO_API_KEY ?? "";

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = brevoKey;
// apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);
// const emailContent = new SibApiV3Sdk.SendSmtpEmail();

// emailContent.subject = "My first Test Email";
// emailContent.sender = {
//   name: "Durgendra from TestKnow",
//   email: "hello@testknow.ai",
// };
// emailContent.to = [{ email: "example@gmail.com" }]; // note: you can send to an array of emails, or just one.
// emailContent.params = { userScore: 4, totalScore: 10, title: "This is test" };
// emailContent.templateId = 1; // Find the email template ID that we just created

// const itemData = [
//   {
//     name: "First item",
//     description: "This text describes the first item",
//     image:
//       "https://images.unsplash.com/photo-1688380303719-bf812819080b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//   },
//   {
//     name: "Second item",
//     description: "This text describes the second item",
//     image:
//       "https://images.unsplash.com/photo-1688374637249-450f78af8219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=424&q=80",
//   },
//   {
//     name: "Third item",
//     description: "This text describes the second item",
//     image:
//       "https://images.unsplash.com/photo-1688269946755-cb1294241a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
//   },
// ];

// let res = await apiInstance.sendTransacEmail(emailContent);
// console.log("send email response:", res.response.statusCode);

const sendEmail = async (emailTo, emailContent, emailTemplate) => {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = {
    name: "Durgendra from TestKnow",
    email: "hello@testknow.ai",
  };
  sendSmtpEmail.to = emailTo;
  sendSmtpEmail.params = emailContent;
  sendSmtpEmail.templateId = emailTemplate;

  await apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "Email sent successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
};

export default sendEmail;
