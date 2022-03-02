import AppRoute from "./routes/routes";
import { AuthProvider } from './hooks/Login/login';
import { SnackbarProvider } from 'notistack';

export default function App() {

  return (
    <SnackbarProvider anchorOrigin={{
      vertical: "bottom", horizontal: "right"
    }} iconVariant={{
      success: '✅ ',
      error: '✖️ ',
      warning: '⚠️ ',
      info: 'ℹ️ ',
    }}>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </SnackbarProvider>
  );
}