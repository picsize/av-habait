using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace av_habait.App_Code.BAL
{
    public class Service
    {
        public Service()
        {

        }

        public string convertToJson(object obj)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            return js.Serialize(obj);
        }

        public string createExceptionJson(Exception ex)
        {
            Dictionary<string, object> res = new Dictionary<string, object>();
            res.Add("state", 0);
            res.Add("error", ex.Message);
            return convertToJson(res);
        }
    }
}