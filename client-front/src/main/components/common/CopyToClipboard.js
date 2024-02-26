import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';

const CopyToClipboardButton = ({ text }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Button onClick={handleClick}>Copy to Clipboard</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </>
  );
};

export default CopyToClipboardButton;
