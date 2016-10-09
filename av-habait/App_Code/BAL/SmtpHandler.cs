using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;

namespace av_habait.App_Code.BAL
{
    public class SmtpHandler
    {
        private MailMessage mail = new MailMessage();
        private SmtpClient SmtpServer = new SmtpClient("mail.picsize.co.il");

        public SmtpHandler()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        private void InitializeComponent()
        {
            mail.From = new MailAddress("postmaster@avbait.co.il", "אב הבית");
            mail.IsBodyHtml = true;
            SmtpServer.Host = "mail.avbait.co.il";
            SmtpServer.Port = 25;
            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.Credentials = new NetworkCredential("postmaster@avbait.co.il", "phexhhz8914!");
            SmtpServer.EnableSsl = false;
        }

        internal string sendEmail(string to, string subject, string msg)
        {
            try
            {
                InitializeComponent();
                List<string> emailAddresses = to.Split(',').ToList();
                foreach (var address in emailAddresses)
                {
                    mail.To.Add(address);
                }

                mail.Subject = subject;
                mail.Body = msg;

                SmtpServer.Send(mail);

                return "success";
            }
            catch (Exception e)
            {
                return "error:\n" + e.Message;
            }
        }

        internal int sendOrder(string to, string subject, string msg)
        {
            try
            {
                InitializeComponent();
                List<string> emailAddresses = to.Split(',').ToList();
                foreach (var address in emailAddresses)
                {
                    mail.To.Add(address);
                }

                mail.Subject = subject;
                mail.Body = msg;

                SmtpServer.Send(mail);

                return 1;
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        internal string sendEmailToMassive(string to, string subject, string msg)
        {
            try
            {
                InitializeComponent();
                List<string> emailAddresses = to.Split(',').ToList();
                foreach (var address in emailAddresses)
                {
                    mail.To.Add(address);
                }

                mail.Subject = subject;
                mail.Body = msg;

                SmtpServer.Send(mail);

                return "success";
            }
            catch (Exception e)
            {
                return "error:\n" + e.Message;
            }
        }

        internal string sendEmail(string subject, string msg)
        {
            try
            {
                InitializeComponent();
                mail.To.Add("topteclift@gmail.com");
                mail.Subject = subject;
                mail.Body = msg;

                SmtpServer.Send(mail);

                return "success";
            }
            catch (Exception e)
            {
                return "error:\n" + e.Message;
            }
        }
    }
}