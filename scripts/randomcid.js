import randomBytes from 'randombytes'
import { CID } from 'multiformats/cid'
import * as raw from 'multiformats/codecs/raw'
import { sha256 } from 'multiformats/hashes/sha2'

async function main () {
  const bytes = randomBytes(32)
  const hash = await sha256.digest(bytes)
  process.stdout.write(CID.create(1, raw.code, hash).toString())
}

main()
