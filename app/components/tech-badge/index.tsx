type TechBadgeProps = {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-zinc-300 bg-zinc-800/50 text-sm py-1 px-3 rounded-full border border-zinc-700">
      {name}
    </span>
  )
}
