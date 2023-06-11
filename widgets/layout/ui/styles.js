export const styles = {
  container: {
    position: "relative",
    backgroundColor: "#232323",
    color: "white",

    menu: {
      maxWidth: '1170px',
      margin: '0 auto',
      padding: "24px",
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
      gap: "24px",

      li: {
        fontSize: "16px",
        // textTransform: "uppercase",
        fontWeight: 600,
      }
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    backgroundColor: "#232323",
    color: "#E3B448",
  },
};
