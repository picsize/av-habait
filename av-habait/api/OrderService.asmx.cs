using av_habait.App_Code.BAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace av_habait.api
{
    /// <summary>
    /// Summary description for Order
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class OrderService : System.Web.Services.WebService
    {
        private readonly SmtpHandler _emailer = new SmtpHandler();
        private readonly Service _api = new Service();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string sendOrder(string subject, string msg, string to)
        {
            try
            {
                int state = _emailer.sendOrder(to, subject, msg);

                Dictionary<string, object> res = new Dictionary<string, object>();
                res.Add("state", state);
                return _api.convertToJson(res);

            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }


        }
    }
}
