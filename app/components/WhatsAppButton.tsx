import { Button } from "@/app/components/ui/button"
import { MessageCircle } from 'lucide-react'
import '../styles/WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <Button 
      className="fixed bottom-4 right-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white whatsapp-button"
      onClick={() => window.open('https://wa.me/905348981952', '_blank')}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      <span>WhatsApp'tan Yazın</span>
    </Button>
  )
}

