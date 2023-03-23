export default function handleError(error: unknown | null) {
	if (!error) {
		return;
	}
	console.error(error);
}
