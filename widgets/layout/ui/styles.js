export const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    height: "80px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

    logo: {
      display: "flex",
      alignItems: "center",
    },

    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: "1170px",
      margin: "0 auto",
    },

    links: {
      display: "flex",
      listStyleType: "none",
      gap: "12px",
      "[li:not(:last-child)]": {
        marginRight: "12px",
      },
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    backgroundColor: "#333",
    color: "#fff",
  },
};
