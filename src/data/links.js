export const links = [
  {
    text: "Home",
    to: "LandingPage",
  },
  {
    text: "Compare",
    to: "",
    dropdown: [
      {
        text: "Motor Insurance",
        to: "MotorInsurance",
        soon: false,
      },
      {
        text: "Home Insurance",
        to: "HomeInsurance",
        soon: true,
      },
      {
        text: "Travel Insurance",
        to: "",
        soon: true,
      },
    ],
  },
  {
    text: "Learn More",
    to: "",
    dropdown: [
      {
        text: "Why Insure?",
        to: "WhyInsure",
      },
      {
        text: "Insurance Policies",
        to: "Policies",
      },
      {
        text: "About GhCompare",
        to: "AboutUs",
      },
    ],
  },
  {
    text: "Contact Us",
    to: "ContactUs",
    // dropdown: [
    //   {
    //     text: "Contact Us",
    //     to: "ContactUs",
    //   },
    // {
    //   text: "FAQs",
    //   to: "",
    // },
    // {
    //   text: "Book an Appointment",
    //   to: "",
    // },
    // ],
  },
];
