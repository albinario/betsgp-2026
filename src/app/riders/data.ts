import { db } from '@/lib/db'

export function getRiders() {
	return db.selectFrom('riders').selectAll().execute()
}
