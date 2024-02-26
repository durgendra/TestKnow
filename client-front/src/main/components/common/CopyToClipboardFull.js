import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';

const CopyToClipboardButtonFull = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        Copy
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </>
  );
};

export default CopyToClipboardButtonFull;
