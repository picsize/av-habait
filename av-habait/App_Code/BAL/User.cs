using av_habait.App_Code.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace av_habait.App_Code.BAL
{
    public class User
    {
        protected readonly DB _db = new DB();

        #region Properties
        public string Address { get; protected set; }
        public DateTime Birthday { get; protected set; }
        public string Email { get; protected set; }
        public string FamilyStatus { get; protected set; }
        public string FullName { get; protected set; }
        public string Gender { get; protected set; }
        public string HomeNumber { get; protected set; }
        public int Id { get; protected set; }
        public string Avatar { get; protected set; }
        public bool IsActive { get; protected set; }
        public string MobileNumber { get; protected set; }
        public string Password { get; protected set; }
        public int Role { get; protected set; }

        #endregion

        public User()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public User(int id, string email, string password, bool isActive, int userType, string fullName, string mobileNumber,
            string homeNumber, string familyStatus, string gender, string address, DateTime birthday, string avatar)
        {
            Id = id;
            Email = email;
            Password = password;
            IsActive = isActive;
            Role = userType;
            FullName = fullName;
            MobileNumber = mobileNumber;
            HomeNumber = homeNumber;
            Gender = gender;
            Address = address;
            FamilyStatus = familyStatus;
            Birthday = birthday;
            Avatar = avatar;
        }

      
        //register user
        internal int register(string email, string password, int userType, string fullName, string mobileNumber, string homeNumber, string familyStatus, string gender, string address, DateTime birthday, string image)
        {
            //return _db.registerUser(email, password, userType, fullName, mobileNumber, homeNumber, familyStatus, gender, address, birthday, image);
            return 0;
        }

        //login user
        internal User login(string email, string password)
        {
            return _db.login(email, password);
        }
    }
}