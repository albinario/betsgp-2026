import { dataFetch } from '@/lib/data-fetch'
import { db } from '@/lib/db'

export function getGps() {
	return dataFetch(() => db.selectFrom('gps').selectAll().execute())
}
