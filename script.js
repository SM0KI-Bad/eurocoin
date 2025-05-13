const connectButton = document.getElementById('connectButton');
const walletAddress = document.getElementById('walletAddress');

connectButton.addEventListener('click', async () => {
  try {
    const provider = window.phantom?.solana;

    if (!provider?.isPhantom) {
      walletAddress.innerText = "Phantom Wallet not found. Please install it.";
      return;
    }

    const resp = await provider.connect();
    walletAddress.innerText = `Connected: ${resp.publicKey.toString()}`;
    connectButton.innerText = "Wallet Connected";
    connectButton.disabled = true;
  } catch (err) {
    console.error(err);
    walletAddress.innerText = "Connection failed.";
  }
});
