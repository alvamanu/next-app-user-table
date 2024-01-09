import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Grid, Typography } from "@mui/material";

import { UserRow } from "../types/userType";
import moment from "moment";

const detailsTitle = "h6";
const detailsData = "body2";

interface DialogPropTypes {
  selectedFile: UserRow;
  open: boolean;
  setOpen: (e: boolean) => void;
}

const MaxWidthDialog = (props: DialogPropTypes) => {
  const { selectedFile, open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    open && (
      <React.Fragment>
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={open}
          onClose={handleClose}
        >
          <Box p={2} sx={{ borderBottom: "1px solid lightgrey" }}>
            <Typography variant="h4">User details</Typography>
          </Box>
          <DialogContent>
            <Grid container>
              <Grid item xs={2}>
                <img src={selectedFile.picture.large} />
              </Grid>
              <Grid item xs={10}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>Name</Typography>
                    <Typography variant={detailsData}>
                      {`${selectedFile.name.title} ${selectedFile.name.first} ${selectedFile.name.last}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>Age</Typography>
                    <Typography variant={detailsData}>
                      {selectedFile.dob.age}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>Full Address</Typography>
                    <Typography variant={detailsData}>
                      {`${selectedFile.location.street.number} ${selectedFile.location.street.name}`}
                    </Typography>
                    <Typography variant={detailsData}>
                      {`${selectedFile.location.city}, ${selectedFile.location.state} ${selectedFile.location.postcode}`}
                    </Typography>
                    <Typography variant={detailsData}>
                      {selectedFile.location.country}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>Email</Typography>
                    <Typography variant={detailsData}>
                      {selectedFile.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>
                      Date of Birth
                    </Typography>
                    <Typography variant={detailsData}>
                      {moment(selectedFile.dob.date).format("LL")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant={detailsTitle}>Phone Number</Typography>
                    <Typography variant={detailsData}>
                      {selectedFile.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  );
};

export default MaxWidthDialog;
