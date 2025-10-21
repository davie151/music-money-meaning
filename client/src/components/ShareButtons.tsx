import { Twitter, Linkedin, Facebook, Mail, Link as LinkIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
  variant?: "floating" | "inline";
  showDownload?: boolean;
  onDownloadPDF?: () => void;
}

export default function ShareButtons({ 
  title, 
  url, 
  variant = "inline",
  showDownload = false,
  onDownloadPDF
}: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const shareButtons = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2]"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
      color: "hover:text-accent"
    }
  ];

  if (variant === "floating") {
    return (
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-10">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-muted-foreground transition-colors ${button.color}`}
            aria-label={`Share on ${button.name}`}
          >
            <button.icon className="h-5 w-5" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:text-accent transition-colors"
          aria-label="Copy link"
        >
          <LinkIcon className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      {shareButtons.map((button) => (
        <a
          key={button.name}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className={`gap-2 ${button.color}`}
          >
            <button.icon className="h-4 w-4" />
            {button.name}
          </Button>
        </a>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="gap-2 hover:text-accent"
      >
        <LinkIcon className="h-4 w-4" />
        Copy Link
      </Button>
      {showDownload && onDownloadPDF && (
        <Button
          variant="default"
          size="sm"
          onClick={onDownloadPDF}
          className="gap-2 ml-2"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      )}
    </div>
  );
}

