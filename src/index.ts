import { Action, Kulkas } from './kulkas';
const { log } = console;

async function mulai(): Promise<void> {
  const kulkas: Kulkas = new Kulkas();
  const action: Action = await kulkas.buka();

  log(await action.lihat());
  log(await action.simpan('gajah'));
  log(await action.lihat());
  log(await action.ambil('gajah'));
  log(await action.lihat());

  try {
    log(await action.ambil('gajah'));
  } catch (error) {
    log(error);
  }

  await kulkas.tutup();
}

mulai();
