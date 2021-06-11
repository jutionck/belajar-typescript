const isiKulkas = ['telur', 'ayam', 'sayuran', 'sirup', 'buah', 'es krim', 'ikan', 'daging', 'puding'];
const { log } = console;

function randomTimeout(minSeconds: number, maxSeconds: number): number {
  minSeconds = Math.ceil(minSeconds);
  maxSeconds = Math.floor(maxSeconds);
  return (Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds) * 1000;
}

export class Action {
  private isiKulkas: string[];

  constructor(isiKulkas: string[]) {
    this.isiKulkas = isiKulkas;
  }

  public async lihat(): Promise<string> {
    log('Melihat isi kulkas...');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isiKulkas.length === 0) {
          reject('Isi kulkas kosong.\n');
        } else {
          resolve(`Kulkas berisi ${this.isiKulkas.length} item, yaitu: ${this.isiKulkas.join(', ')}.\n`);
        }
      }, randomTimeout(1, 3));
    });
  }

  public async ambil(namaItem: string): Promise<string> {
    log(`Mengambil item ${namaItem}...`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item: string = this.isiKulkas.find((item) => item === namaItem);
        this.isiKulkas = this.isiKulkas.filter((item) => item !== namaItem);

        if (!item) {
          reject(`Item ${namaItem} tidak ada.\n`);
        } else {
          resolve(`Item ${item} sudah diambil.\n`);
        }
      }, randomTimeout(1, 3));
    });
  }

  public async simpan(item: string): Promise<string> {
    log(`Menyimpan item ${item}...`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isiKulkas.push(item);
        this.isiKulkas.sort();

        resolve(`Item ${item} sudah disimpan.\n`);
      }, randomTimeout(1, 3));
    });
  }
}

export class Kulkas {
  private readonly actions: Action;

  constructor() {
    this.actions = new Action(isiKulkas);
  }

  public async buka(): Promise<Action> {
    log('Membuka kulkas...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log('Kulkas dibuka.\n');
        resolve(this.actions);
      }, randomTimeout(1, 3));
    });
  }

  public async tutup(): Promise<void> {
    log(`Kulkas sudah ditutup.`);
  }
}
