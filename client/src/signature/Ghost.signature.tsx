type GhostProps = {
    value?: string;
};

function Ghost_signature({ value }: GhostProps) {
    const baseSignature = "@signature: Ryan-DECIAN_LAPM_"
    const dateNow = new Date().getFullYear();

    return (
        <span style={{ display: "none" }}>
            {`${baseSignature} ${dateNow === 2024 ? `©2024 ` : `©2024-${dateNow}`} $${value ? ` | ${value}` : ""}`}
        </span>
    );
}

export default Ghost_signature;
