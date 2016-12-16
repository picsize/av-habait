using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using av_habait.api;
using Newtonsoft.Json.Linq;
using av_habait.App_Code.DAL;

namespace av_habait.App_Code.BAL
{
    public class Business : User
    {
        #region Properties

        public string BusinessName { get; private set; }
        public string Name { get; private set; }
        public string Hours { get; private set; }
        public string Sunday { get; private set; }
        public string Monday { get; private set; }
        public string Tuesday { get; private set; }
        public string Wednesday { get; private set; }
        public string Thursday { get; private set; }
        public string Friday { get; private set; }
        public string Saturday { get; private set; }
        public string About { get; private set; }
        public string Slug { get; private set; }
        public string Areas { get; private set; }
        #endregion

        public Business()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public Business(JObject json)
        {
            BusinessName = (string)json["BusinessName"];
            About = (string)json["About"];
            Email = (string)json["Email"];
            Password = (string)json["Password"];
            FullName = (string)json["FullName"];
            MobileNumber = (string)json["MobileNumber"];
            HomeNumber = (string)json["HomeNumber"];
            Address = (string)json["Address"];
            Avatar = (string)json["Avatar"];
            Hours = (string)json["Hours"];
            Areas = (string)json["Areas"];
        }

        internal int addBusiness(string email, string password, int userType, string fullName, string mobileNumber,
            string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image,
            string businessName, DateTime sundayStart, DateTime sundayEnd, DateTime mondayStart, DateTime mondayEnd, DateTime tuesdayStart, DateTime tuesdayEnd,
            DateTime wednesdayStart, DateTime wednesdayEnd, DateTime thursdayStart, DateTime thursdayEnd, DateTime fridayStart, DateTime fridayEnd,
            DateTime saturdayStart, DateTime saturdayEnd)
        {
            return _db.addBusiness(email, password, userType, fullName, mobileNumber,
             homeNumber, familyStatus, gender, address, birthday, image,
             businessName, sundayStart, sundayEnd, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd,
             wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd,
             saturdayStart, saturdayEnd);
        }

        internal List<Business> getMembers(string slug)
        {
            return _db.getMembers(slug);
        }

        internal Business getMemberBySlug(string slug)
        {
            return _db.getMemberBySlug(slug);
        }

        internal void addBusiness(Business business)
        {
            _db.addBusiness(business);
        }

        internal List<Business> getBusinessForCategory(string slug)
        {
            List<Business> businessList = _db.getBusinessForCategory(slug);
            return businessList;
        }
    }
}