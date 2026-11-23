import ProfileSectionItems from './ProfileSectionItem';

export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-3 w-81.5 bg-[#1A1D1F] rounded-2xl border border-[#1F272A] p-5 overflow-hidden">
      <ProfileSectionItems icon="/bolim.svg" title="Sotib olingan kurslar" />
      <ProfileSectionItems icon="/rocket.svg" title="Buyurtmalar" />
      <ProfileSectionItems icon="/heart1.svg" title="Saqlanganlar" />
      <ProfileSectionItems icon="/person.svg" title="Ummumiy sozlamalar" />
    </div>
  );
}
